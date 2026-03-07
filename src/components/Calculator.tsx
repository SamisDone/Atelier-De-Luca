"use client";

import { useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculatorSchema, type CalculatorFormValues } from "@/schemas/calculatorSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const tileSizeMap: Record<string, { w: number; h: number; label: string }> = {
  "600x600": { w: 0.6, h: 0.6, label: "600 × 600mm" },
  "800x800": { w: 0.8, h: 0.8, label: "800 × 800mm" },
  "600x1200": { w: 0.6, h: 1.2, label: "600 × 1200mm" },
  "1000x1000": { w: 1.0, h: 1.0, label: "1000 × 1000mm" },
};

const pedestalHeightOptions = [
  { value: "fixed", label: "Fixed (17mm)" },
  { value: "28-42", label: "28 – 42mm" },
  { value: "42-65", label: "42 – 65mm" },
  { value: "65-115", label: "65 – 115mm" },
  { value: "115-205", label: "115 – 205mm" },
];

const CalculatorContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const urlArea = searchParams.get("area");
  const urlTileSize = searchParams.get("tileSize");
  const urlPedestalHeight = searchParams.get("pedestalHeight");
  const urlWastage = searchParams.get("wastagePercent");

  const [result, setResult] = useState<{ tiles: number; pedestals: number } | null>(null);

  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      area: urlArea ? parseFloat(urlArea) : 25,
      tileSize: (urlTileSize as any) || "600x600",
      pedestalHeight: (urlPedestalHeight as any) || "28-42",
      wastagePercent: urlWastage ? parseInt(urlWastage) : 10,
    },
  });

  const onSubmit = (data: CalculatorFormValues) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("area", data.area.toString());
    params.set("tileSize", data.tileSize);
    params.set("pedestalHeight", data.pedestalHeight);
    params.set("wastagePercent", data.wastagePercent.toString());
    router.replace(`${pathname}?${params.toString()}#calculator`, { scroll: false });

    const tile = tileSizeMap[data.tileSize];
    const tileArea = tile.w * tile.h;
    const rawTiles = data.area / tileArea;
    const tiles = Math.ceil(rawTiles * (1 + data.wastagePercent / 100));
    // ~4 pedestals per tile for grid layout
    const pedestals = Math.ceil((Math.sqrt(rawTiles) + 1) ** 2);
    setResult({ tiles, pedestals });
  };

  return (
    <section id="calculator" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Project Planning
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Installation Calculator
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estimate the tiles and pedestals required for your exterior project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className=""
        >
          <div className="bg-card rounded-xl border border-border p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Project Area (m²)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g. 50"
                          {...field}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          className="bg-background border-border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tileSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Tile Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue placeholder="Select tile size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(tileSizeMap).map(([key, val]) => (
                            <SelectItem key={key} value={key}>
                              {val.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pedestalHeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Pedestal Height Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue placeholder="Select height" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {pedestalHeightOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="wastagePercent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Wastage Allowance: {field.value}%
                      </FormLabel>
                      <FormControl>
                        <Slider
                          min={0}
                          max={30}
                          step={1}
                          value={[field.value]}
                          onValueChange={(v) => field.onChange(v[0])}
                          className="py-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="hero" size="lg" className="w-full text-base">
                  Calculate Requirements
                </Button>
              </form>
            </Form>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="bg-brand/10 rounded-lg p-6 text-center">
                  <p className="text-3xl font-serif text-brand-tertiary font-bold">{result.tiles}</p>
                  <p className="text-sm text-muted-foreground mt-1">Tiles Required</p>
                </div>
                <div className="bg-brand-accent/20 rounded-lg p-6 text-center">
                  <p className="text-3xl font-serif text-brand-tertiary font-bold">{result.pedestals}</p>
                  <p className="text-sm text-muted-foreground mt-1">Pedestals Required</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Calculator = () => {
  return (
    <Suspense fallback={<div className="py-24 bg-background text-center">Loading Calculator...</div>}>
      <CalculatorContent />
    </Suspense>
  );
};

export default Calculator;
