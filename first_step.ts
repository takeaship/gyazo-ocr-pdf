import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

await new Command()
  .name("gyazo-ocr-pdf")
  .version("0.1.0")
  .description("Command line tool to run OCR on PDF file by Gyazo")
  .parse(Deno.args);