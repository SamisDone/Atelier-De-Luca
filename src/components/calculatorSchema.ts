import { z } from "zod";

export const calculatorSchema = z.object({
  area: z.number().min(1, "Area must be at least 1 m²").max(10000, "Area must be less than 10,000 m²"),
  tileSize: z.enum(["600x600", "800x800", "600x1200", "1000x1000"], {
    message: "Please select a tile size",
  }),
  pedestalHeight: z.enum(["fixed", "28-42", "42-65", "65-115", "115-205"], {
    message: "Please select pedestal height range",
  }),
  wastagePercent: z.number().min(0).max(30),
});

export type CalculatorFormValues = z.infer<typeof calculatorSchema>;
