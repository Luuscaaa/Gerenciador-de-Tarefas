import { forwardRef, Ref } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../input/styles';
import { themas } from '../../global/themes';
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;


type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  iconLeftName?: string;
  iconRightName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};

export const Input = forwardRef<TextInput, Props>((Props, ref: Ref<TextInput>) => {

    const {IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, ...rest} = Props

    const calculateSizeWidth = () => {
      if(IconLeft && IconRight){
        return '85%'
      }else if(IconLeft || IconRight){
        return '90%'
      }else{
        return '100%'
      }
    }

    return(
      <View>
        {title && <Text style={styles.titleInput}>{title}</Text>}
        <View style={styles.boxInput}>
          {IconLeft && iconLeftName && (
            <TouchableOpacity onPress={onIconLeftPress}>
              <IconLeft
                name={iconLeftName as any}
                size={20}
                color={themas.color.gray}
                style={styles.icon}
              />
            </TouchableOpacity>
          )}

          <TextInput
            style={[
              styles.input,{width:calculateSizeWidth()}
            ]}
            ref={ref}
            placeholder={rest.placeholder}
            {...rest}
          />

          {IconRight && iconRightName && (
            <TouchableOpacity onPress={onIconRightPress}>
              <IconRight
                name={iconRightName as any}
                size={20}
                color={themas.color.gray}
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
});