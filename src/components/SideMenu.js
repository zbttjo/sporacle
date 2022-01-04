import React, { useEffect, useState } from "react";
import user from "../assets/user.png";

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// List of menu items
export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "UEFA Matches",
    exact: true,
    to: `/matches`,
    iconClassName: "fas fa-futbol",
    subMenus: [
      { name: "Live", to: "/matches/live" },
      { name: "Coming", to: "/matches/coming" },
    ],
  },
  {
    name: "UEFA Statistique",
    exact: true,
    to: `/statistique`,
    iconClassName: "fas fa-chart-pie",
    subMenus: [
      { name: "Teams", to: "/statistique/teams" },
      { name: "Players", to: "/statistique/players" },
    ],
  },
  {
    name: "News",
    exact: true,
    to: `/news`,
    iconClassName: "far fa-newspaper",
  },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(true);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
      addBrandTile();
    }
    else{
      removeBrandTile();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
    
  };

  const addBrandTile = () => {
    document.querySelectorAll(".brand-title").forEach((ell) => {
      ell.classList.add("display");
    });
  };
  const removeBrandTile = () => {
    document.querySelectorAll(".brand-title").forEach((elll) => {
      elll.classList.remove("display");
    });
  };


  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        removeBrandTile();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={user} alt="webscript" />
        </div>
        <div className="brand-title display" id="brand">
          <h1>SPORACLE</h1>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Yassin Ait Aider</h5>
          <p>yaya@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;