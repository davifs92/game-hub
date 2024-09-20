import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <>
    <Card>
        <Skeleton height="200px" />
        <SkeletonText></SkeletonText>
    </Card>
    </>
)
}

export default GameCardSkeleton