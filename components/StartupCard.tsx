import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    author,
    title,
    category,
    image,
    _id,
    description,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/blog/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/blog/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/blog/user/${author?._id}`}>
          <img
            src={author?.image || ""}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/blog/startup/${_id}`}>
        <p className="startup_card_desc line-clamp-2">{description}</p>
        <img src={image} alt="card img" className="startup-card_img" />
      </Link>
      <div className="flex-between mt-5 gap-3">
        <p className="text-16-medium">{category}</p>
        <Button className="startup-card_btn" asChild>
          <Link href={`/blog/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const StartCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard;
