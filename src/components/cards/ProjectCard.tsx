import Link from 'next/link';
import { Icon } from '@/components/ui';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projecten/${project.id}`} className="group block h-full">
      <article className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 h-full card-hover">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-slate-200 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Project: {project.title}</span>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          
          {/* Content on image */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center text-white/80 text-sm">
              <Icon name="map" size="sm" className="mr-1.5" />
              {project.location}
            </div>
          </div>
          
          {/* Type badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-white text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-lg capitalize shadow-lg">
              {project.type}
            </span>
          </div>

          {/* Hover overlay with icon */}
          <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/20 transition-colors duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
              <Icon name="arrow" size="md" className="text-emerald-600" />
            </div>
          </div>
        </div>
        
        {/* Specs */}
        <div className="p-4 bg-slate-50 border-t border-slate-100">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 capitalize font-medium">
              {project.color}
            </span>
            <span className="bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 capitalize font-medium">
              {project.roofType} dak
            </span>
            <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md border border-emerald-200 font-medium">
              {project.specs.width} × {project.specs.depth}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
