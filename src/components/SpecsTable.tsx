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
import { useLanguage } from "@/i18n/LanguageContext";
import { type SpecItem } from "@/i18n/translations/en";

const SpecsTable = () => {
  const { t } = useLanguage();
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
            {t.specs.tagline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t.specs.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.specs.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
          className="rounded-lg border border-border overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-brand-tertiary/5">
                <TableHead className="text-brand-tertiary font-semibold">{t.specs.columns.property}</TableHead>
                <TableHead className="text-brand-tertiary font-semibold">{t.specs.columns.value}</TableHead>
                <TableHead className="text-brand-tertiary font-semibold hidden md:table-cell">{t.specs.columns.standard}</TableHead>
                <TableHead className="text-brand-tertiary font-semibold text-right">{t.specs.columns.rating}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {t.specs.items.map((spec: SpecItem, i: number) => (
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
