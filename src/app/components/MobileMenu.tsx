import { menu_items } from "../myJasons/menuItems";

const MobileMenu = () => {
  return (
    <div className="flex flex-col mr-4 text-[#3a4928] text-base -mt-[80px] shadow p-2 bg-white rounded-xl">
      {menu_items.map((item) => (
        <nav key={item.index}>
          <ul>
            <li className="py-1 px-2 hover:font-medium hover:shadow hover:rounded-xl hover:bg-[#f1efe7]">
              <a href={item.href}>{item.menuItem}</a>
            </li>
          </ul>
        </nav>
      ))}
    </div>
  );
};
export default MobileMenu;
