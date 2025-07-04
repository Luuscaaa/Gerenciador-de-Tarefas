import { useState } from "react";
import { Modal, Platform, View, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";

type Props = {
  type: 'date' | 'time';
  onDateChange: (date: Date) => void;
  show: boolean;
  setShow: (value: boolean) => void;
};

export default function CustomDateTimePicker({ type, onDateChange, show, setShow }: Props) {
  const [tempDate, setTempDate] = useState(new Date());

  const onChange = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      if (selectedDate) {
        setTempDate(selectedDate);
        onDateChange(selectedDate);
      }
      setShow(false); // fecha automaticamente no Android
    } else {
      if (selectedDate) {
        setTempDate(selectedDate); // só atualiza, não fecha
      }
    }
  };

  const handleConfirmIOS = () => {
    onDateChange(tempDate);
    setShow(false);
  };

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.container}>
            <DateTimePicker
                value={tempDate}
                mode={type}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onChange}
            />
            {Platform.OS === 'ios' && (
                <Button 
                    title="Confirmar" 
                    onPress={handleConfirmIOS}
                />
            )}
        </View>
      </View>
    </Modal>
  );
}
