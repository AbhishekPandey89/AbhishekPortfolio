import { personal } from "../../data/personal";
export default function Footer(){return <footer><span>© {new Date().getFullYear()} {personal.name}</span><span>React · MERN · SEO</span></footer>}
