export type Repository = {
    id: number;
    provider: "github" | "gitlab";
    fullName: string;
    policyPack: string;
    lastReviewAt: string | null;
};

export const mockRepos: Repository[] = [
    {
        id: 1,
        provider: "github",
        fullName: "omar/ai-pr-reviewer",
        policyPack: "symfony-strict-v1",
        lastReviewAt: "2026-02-10T14:20:00Z",
    },
    {
        id: 2,
        provider: "github",
        fullName: "omar/legacy-symfony-app",
        policyPack: "legacy-friendly-v1",
        lastReviewAt: null,
    },
];
