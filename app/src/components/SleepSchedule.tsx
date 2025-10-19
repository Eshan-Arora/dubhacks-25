import { InfoSquareRoot, InfoSquareHeading, InfoSquareContent } from './InfoSquare';
import { LucideBedDouble } from 'lucide-react';

function SleepSchedule() {
  return (
    <div>
      <p className="text-purple-200 text-left py-2">
        Bedtime in 5 hours. Lights will automatically turn off.
      </p>
    </div>
  );
}

export function SleepScheduleInfoSquare() {
  return (
    <InfoSquareRoot className="bg-linear-to-b! from-purple-700 to-purple-900">
      <InfoSquareHeading
        title="Sleep"
        icon={<LucideBedDouble className="text-purple-300" />}
        className="text-purple-200"
      />
      <InfoSquareContent>
        <SleepSchedule />
      </InfoSquareContent>
    </InfoSquareRoot>
  );
}
