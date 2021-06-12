import { useContext } from 'react'
import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import Switch from '../components/SwitchTop'

type IProps = {
    setTheme: any
    darkMode: boolean
}

export default function Home({ darkMode, setTheme }: IProps) {
    console.log(darkMode)
    const { colors } = useContext(ThemeContext)

    return (
        <div className='dark:bg-black-800 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div>
                <Switch
                    onChange={setTheme}
                    checked={darkMode}
                    checkedIcon={false}
                    uncheckedIcon={true}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.15, colors.secundary)}
                    onColor={colors.primary}
                />
            </div>
        </div>
    )
}
