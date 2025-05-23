import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <p className="text-lg text-gray-600 italic mb-6">&quot;{testimonial.content}&quot;</p>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}