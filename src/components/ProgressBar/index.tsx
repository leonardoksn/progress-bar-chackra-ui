import { useEffect, useState } from 'react'
import './style.css'
import { Progress } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

interface IProgressBarProps {
    value: number
}

function ProgressBar({ value }: IProgressBarProps) {



    return (

        <>
            <Progress m={5} height="32px" colorScheme='blackAlpha' value={value} />
            <p className='progress-number'>{value}%</p>
        </>
    )
}

export { ProgressBar }
