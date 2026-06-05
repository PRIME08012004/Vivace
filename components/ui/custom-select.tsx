"use client";
import { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  options: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function CustomSelect({
  options,
  placeholder = "Select an option",
  value,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.07)",
          border: `1px solid ${isOpen ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)"}`,
          borderRadius: "10px",
          padding: "9px 36px 9px 12px",
          color: selected ? "white" : "rgba(255,255,255,0.3)",
          fontSize: "13px",
          outline: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "border-color 0.2s",
          boxSizing: "border-box",
        }}
      >
        {selected || placeholder}

        <svg
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: `translateY(-50%) rotate(${isOpen ? "180deg" : "0deg"})`,
            transition: "transform 0.2s",
            pointerEvents: "none",
            opacity: 0.5,
          }}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#631308",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "10px",
            padding: "4px",
            margin: 0,
            listStyle: "none",
            zIndex: 200,
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
            overflow: "hidden",
          }}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              style={{
                padding: "8px 12px",
                fontSize: "13px",
                color: selected === option ? "white" : "rgba(255,255,255,0.65)",
                borderRadius: "7px",
                cursor: "pointer",
                background:
                  selected === option
                    ? "rgba(255,255,255,0.12)"
                    : "transparent",
                transition: "background 0.15s, color 0.15s",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                if (selected !== option)
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                if (selected !== option)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              {option}

              {selected === option && (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
