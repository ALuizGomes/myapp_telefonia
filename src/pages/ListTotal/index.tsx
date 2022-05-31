import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native"

interface ListTelephonyProps {
    id: string,
    line_number: string,
    chip_number: string,
    data_plan: string,
    account_name: string,
    telephone_operator: string
}


export function ListTotal() {
    const [status, setStatus] = useState('')
    const [telefonia, setTelefonia] = useState<ListTelephonyProps[]>([])
    let todasOperadoras: ListTelephonyProps[] = []

    function handleDeleteTelephony(id: string) {
        Alert.alert("Exclusão", 'Tem Certeza que Deseja Deletar os Dados?', [
            {text: 'Nao', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Sim', onPress: () => {
                setStatus('E') 
                setTelefonia(phones => phones.filter(phone => phone.id !== id))
                }
            }
        ])
    }


    return (
        <View style={styles.container}></View>
    )
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#f0f2f5'
    }
})