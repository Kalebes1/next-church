import Container from "../Container";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import NavBarItems from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed  w-full bg-white z-10 shadow-sm">
        <div className="py-4 items-center ">
            <Container>
                <div className="flex justify-between px-8 items-center py-3  ">
                    <Logo/>
                    <SocialMedia/>
                    <NavBarItems/>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar;