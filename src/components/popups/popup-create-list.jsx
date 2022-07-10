import React from 'react'
import { useDispatch } from 'react-redux'
import { 
  Modal,
  Heading,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Button
} from '@chakra-ui/react'
import { useForm } from '../../hooks/useForm.jsx'
import { AddList } from '../../actions/albumes.js'

const PopupCreateList = ({ isOpen, onClose, isForEdit=false }) => {
  const dispatch= useDispatch()
  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    background: ''
  })

  const { title, background } = formValues

  const handleAddList = () => {
    reset()
    dispatch(AddList({
      id: title,
      title,
      background,
      albumsIds: []
    }))
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
     <ModalOverlay /> 
     <ModalContent>
      <ModalHeader>
        {(isForEdit) ? <>Edita tu lista</> : <>Crea tu lista personalizada </>} 
      </ModalHeader>
      <ModalCloseButton/>
      <ModalBody>
        <Input
          mt={3}
          type='text'
          name='title'
          value={title}
          placeholder='Escriba el nombre de su lista'
          onChange={handleInputChange}
        />
        <Input
          mt={3}
          type='text'
          name='background'
          value={background}
          placeholder='Coloque la imagen para la portada de su lista'
          onChange={handleInputChange}
        />
        <Button
          mt={5}
          mb={4}
          align='center'
          onClick={handleAddList}
        >
          Agregar lista
        </Button>
      </ModalBody>
     </ModalContent>
    </Modal>
  )
}

export default PopupCreateList
