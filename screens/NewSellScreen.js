// import React from 'react';
// import { Text } from 'react-native';

// const NewSellScreen = () => {
//   return (
//    <Text>Amna</Text>
//   );
// };

// export default NewSellScreen;
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  SetBrands,
  SetCategories,
  SetGlobalModalType
} from "../../store/app/AppAction"
import {
  GetBrandsRequest,
  GetCategoriesRequest
} from "../../services/products.service"
import { Text } from "react-native"
import { forkJoin } from "rxjs"

const LazySellMainContent = React.lazy(() =>
  import("../../components/organisms/sell/sellComponent")
) // Carga diferida

export const NewsScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [sendedRequest, setSendedRequest] = useState(false)
  const photosReducer = useSelector(state => state.sellPage.photos)

  //#region Callbacks
  const OpenModalCamera = () => {
    dispatch(SetGlobalModalType("camera"))
    navigation.navigate("GlobalModal")
  }

  const FetchRequiredApiData = () => {
    //console.log("Getting categories and brands");

    const categoriesReq = GetCategoriesRequest()
    const brandsReq = GetBrandsRequest()

    forkJoin([categoriesReq, brandsReq]).subscribe(
      ([categoriesReq, brandsReq]) => {
        setSendedRequest(true)

        // Set data
        dispatch(SetCategories(categoriesReq.data))
        dispatch(SetBrands(brandsReq.data.data))
      },
      error => {
        console.error(error)
      }
    )
  }
  //#endregion

  useEffect(() => {
    if (!sendedRequest) {
      FetchRequiredApiData()
    }
  }, [photosReducer])

  return (
    <React.Suspense fallback={<Text>Loading</Text>}>
      <LazySellMainContent onPressAddPhoto={OpenModalCamera} />
    </React.Suspense>
  )
}