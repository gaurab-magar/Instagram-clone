import Button from "./Components/ui/Button";
import Input from "./Components/ui/Input";

export default function Home() {
  return (
    <div>
      <h3>hi i am home page</h3>
      <Button>send</Button>
      <Input placeholder='Write a caption...' id="search" type="text" />
    </div>
  );
}
