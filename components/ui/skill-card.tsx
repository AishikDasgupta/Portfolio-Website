import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Skill } from "@/lib/types"

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-medium">{skill.name}</span>
        </div>
        <Progress value={skill.level} className="h-2" />
      </CardContent>
    </Card>
  )
}