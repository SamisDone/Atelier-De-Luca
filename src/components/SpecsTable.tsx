"use client";

import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const specs = [
  { property: "Tile Thickness", value: "20mm", standard: "EN 14411", rating: "Class BIa" },
  { property: "Load-Bearing Capacity", value: "≥ 1,000 kg", standard: "ISO 10545-4", rating: "Superior" },
  { property: "Slip Resistance", value: "R11 / C", standard: "DIN 51130", rating: "Anti-slip" },
  { property: "Water Absorption", value: "< 0.5%", standard: "ISO 10545-3", rating: "Frost-proof" },
  { property: "Flexural Strength", value: "≥ 45 N/mm²", standard: "ISO 10545-4", rating: "Heavy duty" },
  { property: "Abrasion Resistance", value: "Class 5", standard: "ISO 10545-7", rating: "Maximum" },
  { property: "Chemical Resistance", value: "UA / ULA", standard: "ISO 10545-13", rating: "Highest" },
  { property: "Thermal Shock", value: "Resistant", standard: "ISO 10545-9", rating: "All climates" },
];

const SpecsTable = () => {
  return (
    <section id="specifications" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Performance Data
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Technical Specifications
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every Atelier De Luca porcelain tile exceeds international standards for exterior applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-lg border border-border overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-brand-tertiary/5">
                <TableHead className="text-brand-tertiary font-semibold">Property</TableHead>
                <TableHead className="text-brand-tertiary font-semibold">Value</TableHead>
                <TableHead className="text-brand-tertiary font-semibold hidden md:table-cell">Standard</TableHead>
                <TableHead className="text-brand-tertiary font-semibold text-right">Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specs.map((spec, i) => (
                <motion.tr
                  key={spec.property}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="border-b border-border hover:bg-brand-secondary/30 transition-colors duration-200"
                >
                  <TableCell className="font-medium text-foreground">{spec.property}</TableCell>
                  <TableCell className="text-brand font-semibold">{spec.value}</TableCell>
                  <TableCell className="text-muted-foreground hidden md:table-cell">{spec.standard}</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-block bg-brand/10 text-brand-tertiary text-xs px-3 py-1 rounded-full">
                      {spec.rating}
                    </span>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecsTable;
