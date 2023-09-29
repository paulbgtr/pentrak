export class CreateBookDto {
  links: object[];
  title: string;
  author: string;
  description: string;
  status: string;
  postedDate: Date;
  upvotes: number;
}
