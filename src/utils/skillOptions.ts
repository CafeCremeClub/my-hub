import {Skill} from "@/types/onboarding/Skill";

export const skillOptions: { key: Skill; value: Skill; label: string }[] = [
    {key: Skill.JAVASCRIPT, value: Skill.JAVASCRIPT, label: "JavaScript"},
    {key: Skill.TYPESCRIPT, value: Skill.TYPESCRIPT, label: "TypeScript"},
    {key: Skill.REACT, value: Skill.REACT, label: "React"},
    {key: Skill.NODE_JS, value: Skill.NODE_JS, label: "Node.js"},
    {key: Skill.EXPRESS, value: Skill.EXPRESS, label: "Express"},
    {key: Skill.NEXT_JS, value: Skill.NEXT_JS, label: "Next.js"},
    {key: Skill.POSTGRESQL, value: Skill.POSTGRESQL, label: "PostgreSQL"},
    {key: Skill.MONGODB, value: Skill.MONGODB, label: "MongoDB"},
    {key: Skill.DOCKER, value: Skill.DOCKER, label: "Docker"},
    {key: Skill.GIT, value: Skill.GIT, label: "Git"}
];