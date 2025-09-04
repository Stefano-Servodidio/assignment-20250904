// List Item component
import {
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Image
} from '@chakra-ui/react'
import React from 'react'

const ListItemPopover: React.FC<{
  title: string
  badge: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}> = ({ title, badge, isOpen, onClose, children }) => {
  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent width={'min-content'}>
        <PopoverArrow />
        <PopoverBody>
          <Flex
            justify="center"
            align="center"
            width={{ base: '200px', md: '300px' }}
            height={{ base: '200px', md: '300px' }}
          >
            {!badge && <Spinner />}
            {!!badge && (
              <Image
                src={badge}
                alt={`${title} Badge`}
                objectFit={'scale-down'}
                width={{ base: '120px', md: '200px' }}
                height={{ base: '120px', md: '200px' }}
              />
            )}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default ListItemPopover
