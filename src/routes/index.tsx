import { createFileRoute } from "@tanstack/react-router";
import { Editor } from "~/components/Editor";
import { ProductTable } from "~/components/ProductTable";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";
import { Button } from "~/components/ui/Button";
import { Checkbox } from "~/components/ui/Checkbox";
import { ErrorMessage } from "~/components/ui/ErrorMessage";
import { Heading } from "~/components/ui/Heading";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/Label";
import { Radio } from "~/components/ui/Radio";
import { Select, SelectOptGroup, SelectOption } from "~/components/ui/Select";
import { Textarea } from "~/components/ui/Textarea";

export const Route = createFileRoute("/")({
  component: () => (
    <main>
      <Heading>Portable Meme</Heading>
      <div>
        <ThemeSwitcher />
      </div>
      <div>
        <Label>Genres</Label>
        <Select>
          <SelectOptGroup label="Genres">
            <SelectOption value="action">Action</SelectOption>
            <SelectOption value="adventure">Adventure</SelectOption>
            <SelectOption value="comedy">Comedy</SelectOption>
            <SelectOption value="drama">Drama</SelectOption>
            <SelectOption value="fantasy">Fantasy</SelectOption>
            <SelectOption value="horror">Horror</SelectOption>
            <SelectOption value="mystery">Mystery</SelectOption>
            <SelectOption value="psychological">Psychological</SelectOption>
            <SelectOption value="romance">Romance</SelectOption>
            <SelectOption value="sci-fi">Sci-Fi</SelectOption>
            <SelectOption value="thriller">Thriller</SelectOption>
            <SelectOption value="war">War</SelectOption>
          </SelectOptGroup>
        </Select>
      </div>
      <div>
        <Label id="email-label" htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          placeholder="Enter your e-mail address"
          id="email"
          aria-describedby="email-label"
        />
      </div>
      <div>
        <Label htmlFor="terms-and-conditions">Terms and Conditions</Label>
        <Checkbox value="terms-and-conditions" />
      </div>
      <Radio />
      <ErrorMessage>This is just a random text.</ErrorMessage>

      <div>
        <Label htmlFor="textarea">Textarea</Label>
        <Textarea id="textarea" placeholder="Enter your text here..." />
      </div>

      <div>
        <Label htmlFor="editor">Product description</Label>
        <Editor />
      </div>
      <div>
        <ProductTable />
      </div>
      <div>
        <Button variant="primary">Upload</Button>
        <Button variant="secondary">Upload</Button>
        <Button variant="tertiary">Upload</Button>
      </div>
    </main>
  ),
});
