import Link from 'next/link';
import { Icon } from '@/components/ui';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projecten/${project.id}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-slate-200 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Project: {project.title}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-200 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center text-white/80 text-sm">
              <Icon name="map" size="sm" className="mr-1" />
              {project.location}
            </div>
          </div>
          
          <div className="absolute top-4 right-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-2 py-1 rounded-lg capitalize">
              {project.type}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded capitalize">
              {project.color}
            </span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded capitalize">
              {project.roofType} dak
            </span>
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">
              {project.specs.width} x {project.specs.depth}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
