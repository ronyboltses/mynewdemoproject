import React from 'react';
import { Ruler, Box, Calculator, ToyBrick as Brick, Home, Grid, Paintbrush, Container, Shovel, Loader as Road, Bug, Snowflake, Umbrella, Sun, Scale, Wrench, ArrowUp, CircleDot, LayoutGrid, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CalculatorTool {
  name: string;
  icon: React.ElementType;
  description: string;
  path: string;
}

const tools: CalculatorTool[] = [
  {
    name: "Construction Cost",
    icon: Calculator,
    description: "Calculate total construction costs",
    path: "/tools/construction-cost"
  },
  {
    name: "Steel Quantities",
    icon: Grid,
    description: "Calculate steel reinforcement quantities",
    path: "/tools/steel"
  },
  {
    name: "Concrete Calculator",
    icon: Box,
    description: "Calculate concrete volume and mix ratios",
    path: "/tools/concrete"
  },
  {
    name: "Brick & Plaster",
    icon: Brick,
    description: "Calculate brick quantities and plaster area",
    path: "/tools/brick"
  },
  {
    name: "Roof Calculator",
    icon: Home,
    description: "Calculate roof area and pitch",
    path: "/tools/roof"
  },
  {
    name: "Flooring",
    icon: LayoutGrid,
    description: "Calculate flooring materials and costs",
    path: "/tools/flooring"
  },
  {
    name: "Paint Calculator",
    icon: Paintbrush,
    description: "Calculate paint quantities and coverage",
    path: "/tools/paint"
  },
  {
    name: "Water Tank",
    icon: Container,
    description: "Calculate water tank capacity",
    path: "/tools/water-tank"
  },
  {
    name: "Excavation",
    icon: Shovel,
    description: "Calculate excavation volume",
    path: "/tools/excavation"
  },
  {
    name: "Asphalt",
    icon: Road,
    description: "Calculate asphalt quantities",
    path: "/tools/asphalt"
  },
  {
    name: "Anti Termite",
    icon: Bug,
    description: "Calculate anti-termite treatment area",
    path: "/tools/anti-termite"
  },
  {
    name: "Material Weights",
    icon: Scale,
    description: "Calculate construction material weights",
    path: "/tools/weights"
  },
  {
    name: "Metal Calculator",
    icon: Wrench,
    description: "Calculate metal work quantities",
    path: "/tools/metal"
  },
  {
    name: "Super Elevation",
    icon: ArrowUp,
    description: "Calculate road super elevation",
    path: "/tools/elevation"
  },
  {
    name: "Arc Calculator",
    icon: CircleDot,
    description: "Calculate arc measurements",
    path: "/tools/arc"
  },
  {
    name: "Bill of Quantities",
    icon: ClipboardList,
    description: "Generate detailed bill of quantities",
    path: "/tools/boq"
  }
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Construction Calculators</h1>
        <p className="text-xl text-gray-600">
          Specialized tools for precise construction calculations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.name}
              to={tool.path}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 group-hover:from-blue-600/10 group-hover:to-indigo-600/10 transition-all duration-300" />
              <div className="relative p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}