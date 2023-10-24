import { IAddress } from "."

export default interface WithAddressModalProps {
  openAddressModal: () => void
  isVerify: boolean
  isLoading: boolean
  address: IAddress
  isAddress: boolean
}
