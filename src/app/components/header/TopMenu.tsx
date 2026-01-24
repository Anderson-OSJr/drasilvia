import { menu_items } from "@/app/myJasons/menuItems";

const TopMenu = () => {
  return (
    <div className="flex flex-row mr-8 xl:mr-10 text-[#3a4928] text-base">
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
export default TopMenu;
