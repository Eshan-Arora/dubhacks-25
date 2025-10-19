import { InfoSquareRoot, InfoSquareHeading, InfoSquareContent } from './InfoSquare';
import { LucideBedDouble } from 'lucide-react';

function SleepSchedule() {
  return (
    <div>
      <p className="text-gray-200 text-left py-2">
        Sleep scheduled in 5 hours. Lights will be automatically turned off.
      </p>
    </div>
  );
}

export function SleepScheduleInfoSquare() {
  return (
    <InfoSquareRoot className="bg-linear-to-b! from-purple-700 to-purple-900">
      <InfoSquareHeading
        title="Sleep"
        icon={<LucideBedDouble className="text-gray-200" />}
        className="text-gray-100"
      />
      <InfoSquareContent>
        <SleepSchedule />
      </InfoSquareContent>
    </InfoSquareRoot>
  );
}
