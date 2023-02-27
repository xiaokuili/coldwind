import React, { useState } from 'react';
import { Box } from '../styles/box';
import { Sidebar } from './sidebar.styles';
import { Avatar, Tooltip } from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { CompaniesDropdown } from './companies-dropdown';
import { HomeIcon } from '../icons/sidebar/home-icon';
import { PaymentsIcon } from '../icons/sidebar/payments-icon';
import { BalanceIcon } from '../icons/sidebar/balance-icon';
import { AccountsIcon } from '../icons/sidebar/accounts-icon';
import { CustomersIcon } from '../icons/sidebar/customers-icon';
import { ProductsIcon } from '../icons/sidebar/products-icon';
import { ReportsIcon } from '../icons/sidebar/reports-icon';
import { DevIcon } from '../icons/sidebar/dev-icon';
import { ViewIcon } from '../icons/sidebar/view-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { CollapseItems } from './collapse-items';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { FilterIcon } from '../icons/sidebar/filter-icon';
import { useSidebarContext } from '../layout/layout-context';
import { ChangeLogIcon } from '../icons/sidebar/changelog-icon';
import { useRouter } from 'next/router';

export const SidebarWrapper = () => {
   const router = useRouter();
   const { collapsed, setCollapsed } = useSidebarContext();

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <CompaniesDropdown />
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{ height: '100%' }}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     title="Home"
                     icon={<HomeIcon />}
                     isActive={router.pathname === '/'}
                     href="/"
                  />
                  <SidebarMenu title="数据产品经营者">
                     <SidebarItem
                        isActive={router.pathname === '/data_app'}
                        title="数据场景"
                        icon={<ChangeLogIcon />}
                        href="/data_app"
                     />
                     <SidebarItem
                        isActive={router.pathname === '/settings'}
                        title="数据服务"
                        icon={<SettingsIcon />}
                     />
                  </SidebarMenu>



                  <SidebarMenu title="数据加工者 ">
                     <CollapseItems
                        icon={<BalanceIcon />}
                        items={['数据清洗', '数据抽取', '数据聚合']}
                        title="数据治理"
                     />

                     <SidebarItem
                        isActive={router.pathname === '/customers'}
                        title="数据质量"
                        icon={<CustomersIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/products'}
                        title="NLP算法"
                        icon={<ProductsIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/reports'}
                        title="数据打标"
                        icon={<ReportsIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/developers'}
                        title="数据指标"
                        icon={<DevIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/view'}
                        title="数据接口"
                        icon={<ViewIcon />}
                     />

                  </SidebarMenu>
                  <SidebarMenu title="数据持有者">
                     <SidebarItem
                        isActive={router.pathname === '/accounts'}
                        title="数据分类目录"
                        icon={<AccountsIcon />}
                        href="accounts"
                     />
                     <SidebarItem
                        isActive={router.pathname === '/payments'}
                        title="数据包"
                        icon={<PaymentsIcon />}
                     />

                  </SidebarMenu>

               </Sidebar.Body>
               <Sidebar.Footer>
                  <Tooltip content={'Settings'} rounded color="primary">
                     <SettingsIcon />
                  </Tooltip>
                  <Tooltip content={'Adjustments'} rounded color="primary">
                     <FilterIcon />
                  </Tooltip>
                  <Tooltip content={'Profile'} rounded color="primary">
                     <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        size={'sm'}
                     />
                  </Tooltip>
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
