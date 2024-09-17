import IconClose from "./icon-close";
import { drawer } from "@kb/data";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: Props) {
  const modal = isOpen ? false : true;
  const modalState = isOpen ? "is-open" : "is-close";
  const backdrop = isOpen ? "is-visible" : "is-hidden";
  const backdropState = isOpen ? 0 : -1;
  return (
    <>
      <aside aria-hidden={modal} aria-modal={isOpen} className={modalState} id="drawer">
        <button className="btn" id="close-drawer" onClick={onClose}>
          <IconClose className="icon" color="currentColor" size={32} />
        </button>
        <nav className="content-drawer">
          {drawer.map((menu) => (
            <Link href={menu.slug} className="menu" key={menu.key} onClick={onClose}>
              {menu.name}
            </Link>
          ))}
        </nav>
      </aside>
      <div
        aria-hidden={modal}
        className={backdrop}
        id="backdrop"
        tabIndex={backdropState}
        onClick={onClose}
      ></div>
    </>
  );
}
