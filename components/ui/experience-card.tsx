import { Card, CardContent } from "@/components/ui/card"
import { Experience } from "@/lib/types"

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{experience.role}</h3>
            <p className="text-muted-foreground">{experience.company}</p>
          </div>
          <span className="text-sm text-muted-foreground">{experience.duration}</span>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {experience.description.map((item, index) => (
            <li key={index} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}