import { CASE_STUDIES } from "@/data/static";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const CaseStudyCard = ({ caseStudy, select }: { caseStudy: typeof CASE_STUDIES[0], select: ()=> void }) =>{
  const handleClick = () => {
    window.open(`/project/${caseStudy.slug}`, "_blank");
  };
  return (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-900 rounded-xl overflow-hidden shadow-xl"
  >
    <div className="h-48 relative">
      <Image
        src={caseStudy.image}
        alt={caseStudy.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
      <p className="text-gray-400 mb-4">{caseStudy.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {caseStudy.tech.map(tech => (
          <span key={tech} className="px-2 py-1 bg-gray-800 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Button
          className="text-purple-400 hover:text-purple-300 flex items-center gap-2 cursor-pointer"
          onClick={select}
        >
          Ver detalhes <ChevronRight size={16} />
        </Button>
        <Button 
          variant={"outline"} className="text-foreground cursor-pointer"
          onClick={handleClick}
        >Demo</Button>
      </div>
    </div>
  </motion.div>
);}

export default CaseStudyCard;