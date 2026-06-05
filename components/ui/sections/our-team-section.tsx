import OurTeamcard from "@/components/ui/hair-dresser-card";

export default function OurTeam() {
  return (
    <div
      id="our-team"
      className="w-full h-auto md:h-150 flex flex-col md:flex-row justify-evenly relative overflow-hidden p-4 sm:p-8"
    >
      <OurTeamcard />
    </div>
  );
}
