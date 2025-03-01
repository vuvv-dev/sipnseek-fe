'use client'

import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Avatar,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from '@nextui-org/react'
import { Bell, User, Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface HeaderProps {
    sidebarOpen: boolean
    setSidebarOpen: (open: boolean) => void
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
    const router = useRouter()
    return (
        <Navbar
            isBordered
            className="border-b-1 border-secondary bg-white"
            id="dashboard-header"
        >
            <NavbarContent justify="start">
                <Button
                    isIconOnly
                    className="lg:hidden"
                    size="sm"
                    variant="light"
                    onPress={() => setSidebarOpen(!sidebarOpen)}
                >
                    <Menu size={20} />
                </Button>
                <NavbarBrand className="mr-4">
                    <p
                        className="text-primary` hidden select-none font-bold text-inherit sm:block"
                        onClick={() => router.push('/sipnseek')}
                    >
                        SIPNSEEK
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">admin@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">
                            Team Settings
                        </DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">
                            Configurations
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}
