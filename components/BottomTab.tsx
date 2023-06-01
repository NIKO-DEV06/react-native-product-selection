import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import tw from "twrnc";
import { leftArrow, rightArrow } from "../helpers/helper";
import { SvgXml } from "react-native-svg";

interface Tab {
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  totalPages: number;
}

const renderPageIndicator = (totalPages: number, currentPage: number) => {
  const pageIndicators = [];
  for (let i = 0; i < totalPages; i++) {
    const isActive = i === currentPage;
    const pageIndicatorStyle = [
      tw`w-2 h-2 rounded-full`,
      isActive ? tw`bg-black` : tw`bg-gray-500`,
    ];
    pageIndicators.push(<View key={i} style={pageIndicatorStyle} />);
  }
  return pageIndicators;
};

const BottomTab = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  totalPages,
}: Tab) => {
  const handleConfirmation = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to proceed with these products?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            // Perform the action upon confirmation
            console.log("Confirmed");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View
      style={[
        tw`bg-white pb-[2.5rem] absolute bottom-0 w-full bordert-[1px] border-[#E2E2E2]`,
      ]}
    >
      <View style={[tw`p-4 flex-row justify-center items-center gap-[1rem]`]}>
        <TouchableOpacity
          onPress={handlePrevPage}
          style={[tw`flex gap-[0.5rem] items-center`]}
          disabled={currentPage === 0} // Disable the button if on the first page
        >
          <SvgXml xml={leftArrow} width={30} height={30} />
        </TouchableOpacity>

        <View style={[tw`flex flex-row gap-[0.5rem] items-center`]}>
          {renderPageIndicator(totalPages, currentPage)}
        </View>

        <TouchableOpacity
          onPress={handleNextPage}
          style={[tw`flex gap-[0.5rem] items-center`]}
          disabled={currentPage === totalPages - 1} // Disable the button if on the last page
        >
          <SvgXml xml={rightArrow} width={30} height={30} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleConfirmation}
        style={[tw`bg-[#FFC529] mx-[2rem] rounded-2xl`]}
      >
        <Text style={[tw`py-[1.2rem] text-center`]}>Select Products</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;
