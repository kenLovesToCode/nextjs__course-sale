import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
}

const ResourceCard = ({ id, title, image, downloadNumber }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${id}`}>
        <div>
          <Image
            src={image}
            className="h-full rounded-md object-cover"
            width={384}
            height={440}
            alt={title}
          />
        </div>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <CardTitle className="paragraph-semibold line-clamp-1 w-full text-left text-white">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" width={20} height={20} alt="download" />
          {downloadNumber}
        </div>
        <Link
          href={`/resource/${id}`}
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download Now
          <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;