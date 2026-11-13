import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Workshop } from "@/lib/data/types";

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const photo = workshop.photos[0];

  return (
    <Link
      href={`/workshops/${workshop.slug}`}
      className="block rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <Card className="h-full pt-0">
        {photo ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] w-full bg-muted" />
        )}
        <CardHeader>
          <CardTitle>{workshop.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {workshop.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {workshop.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
