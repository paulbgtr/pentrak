export type Comment = {
  body: string;
  replies: Comment[];
  postedDate: Date;
};
