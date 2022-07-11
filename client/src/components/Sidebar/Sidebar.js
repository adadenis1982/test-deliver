import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact'; import { NavLink, Link } from 'react-router-dom'; 

function Sidebar() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow:'scroll initial' }}>
    <CDBSidebar textColer="#fff" variant="primary">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <Link to="/">Главная</Link>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact="true" to="/" activeclassname="activeClicked">
                    <CDBSidebarMenuItem icon="columns">
                    Справочная информация
                    </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true" to="/" activeclassname="activeClicked">
                    <CDBSidebarMenuItem icon="columns">
                    Статистика
                    </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true" to="/" activeclassname="activeClicked">
                    <CDBSidebarMenuItem icon="columns">
                      Ресурсы
                    </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true" to="/deliver" activeclassname="activeClicked">
                     <CDBSidebarMenuItem icon="columns">
                     Планирование поставок
                    </CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{textAlign:'center'}}>
            <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
            © 2022 Copyright
            </div>
        </CDBSidebarFooter>
    </CDBSidebar>
</div>
  );
}

export default Sidebar;
