import Content from "./content/content";
import Sidebar from "./Sidebar/sidebar"
import Cover from "./content/cover";
import { Container } from "@chakra-ui/react";
import '../../App.css';
export default function Profile(){
return(
 <>  
{/* <Cover /> */}
<div style={{marginTop: "10rem"}}>
<Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
<Sidebar />
<Content />
</Container>
</div>
</>)}