"use client";

import { useCallback, useSyncExternalStore } from "react";
import { getProductById, type CatalogProduct } from "@/lib/products";

export type CartItem = {
  productId: number;
  quantity: number;
};

const STORAGE_KEY = "vivace-cart";

type Listener = () => void;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  emit();
}

function getServerSnapshot(): CartItem[] {
  return [];
}

function subscribeHydration() {
  return () => {};
}

function getHydratedSnapshot() {
  return true;
}

function getServerHydratedSnapshot() {
  return false;
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, readCart, getServerSnapshot);
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    getHydratedSnapshot,
    getServerHydratedSnapshot,
  );

  const addItem = useCallback((productId: number, quantity = 1) => {
    const current = readCart();
    const existing = current.find((i) => i.productId === productId);
    if (existing) {
      writeCart(
        current.map((i) =>
          i.productId === productId
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        ),
      );
    } else {
      writeCart([...current, { productId, quantity }]);
    }
  }, []);

  const setQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      writeCart(readCart().filter((i) => i.productId !== productId));
      return;
    }
    writeCart(
      readCart().map((i) =>
        i.productId === productId ? { ...i, quantity } : i,
      ),
    );
  }, []);

  const removeItem = useCallback((productId: number) => {
    writeCart(readCart().filter((i) => i.productId !== productId));
  }, []);

  const clearCart = useCallback(() => {
    writeCart([]);
  }, []);

  const detailed = items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return { ...item, product };
    })
    .filter(Boolean) as Array<CartItem & { product: CatalogProduct }>;

  const totalInPaise = detailed.reduce(
    (sum, item) => sum + item.product.priceInPaise * item.quantity,
    0,
  );

  const itemCount = detailed.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items: detailed,
    rawItems: items,
    addItem,
    setQuantity,
    removeItem,
    clearCart,
    totalInPaise,
    itemCount,
    hydrated,
  };
}
