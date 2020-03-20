import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { marginLeft: 20, marginRight: 20 },
  traineeView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: 'silver',
    marginBottom: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  idView: {
    backgroundColor: '#000000',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 50
  },
  idText: {
    color: 'white',
    fontSize: 25
  },
  nameText: { paddingLeft: 10, fontSize: 22 }
});
