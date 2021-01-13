import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Picker, Button, TouchableOpacity} from 'react-native';

import Header from '../components/Header';

const AddRecipe: () => React$Node = ({navigation}) => {
  const [steps, setSteps] = useState(false);
  const [ingredients, setIngredients] = useState(false);
  const [dummy, reload] = useState(false);
  const [recipe, setRecipe] = useState({name: '', serving: '', time: '', category: '', step:[{id:'', text:''}]});
  const [step, setStep]= useState([])
  const [stepInput, setStepInput] = useState([]);
  const [ingredient, setIngredient]= useState([]);
  const [ingInput, setIngInput] = useState([]);


  const addStepInput = (index) => {
    let key=index;
    stepInput.push(
      <TextInput 
        multiline
        placeholder="Describe your steps"
        textContentType="text"
        keyboardType="text"
        style={styles.input}
        key={key}
        onChangeText={(text) =>  setStep([...step, {'index': key, 'text': text}])} 
      />
    );
    reload(!dummy);
  }

  const removeStepInput=() =>{
    stepInput.pop();
    step.pop()
    reload(!dummy);
  }

  const addIngInput = (index) => {
    console.log(ingredient)
    let measure={ingredient:'', quantity:'', unit:''}
    let key=index;
    ingInput.push(
        <View key={key} style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20}}>
        <Picker
          selectedValue={measure.ingredient}
          style={styles.pickerRow}
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) => (measure.ingredient=itemValue)}
        >
          <Picker.Item label="Ingredient" value="" />
          <Picker.Item label="Salt" value="Salt" />
          <Picker.Item label="Potato" value="Potato" />
        </Picker>
        <TextInput
          style={styles.inputRow}
          placeholder="Quantity"
          textContentType="numeric"
          keyboardType="numeric"
          onChangeText={(text) => (measure.quantity=text)}
          value={measure.quantity}
        />
        <Picker
          selectedValue={measure.unit}
          style={styles.pickerRow}
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) => (measure.unit=itemValue)}
        >
          <Picker.Item label="Unit" value="" />
          <Picker.Item label="Tea spoon" value="tsp" />
          <Picker.Item label="Gram" value="g" />
        </Picker>
        </View>
    );
    setIngredient([...ingredient, measure])
    reload(!dummy);
  }

  const removeIngInput=() =>{
    ingInput.pop();
    ingredient.pop()
    reload(!dummy);
  }

  //recipe general infos
  if(steps==false && ingredients==false){
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <View style={styles.inputPage}>
        <Text style={styles.inputPageTitle}>New recipe</Text>
        <Text style={styles.inputPageSubTitle}>General Informations</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          textContentType="text"
          keyboardType="text"
          onChangeText={(text) => setRecipe({...recipe, name: text})}
          value={recipe.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of servings"
          textContentType="numeric"
          keyboardType="numeric"
          onChangeText={(text) => setRecipe({...recipe, serving: text})}
          value={recipe.serving}
        />
        <TextInput
          style={styles.input}
          placeholder="Necessary time"
          textContentType="text"
          keyboardType="text"
          onChangeText={(text) => setRecipe({...recipe, time:text})}
          value={recipe.serving}
        />
        <Picker
          selectedValue={recipe.category}
          style={styles.picker}
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) => setRecipe({...recipe, category: itemValue})}
        >
          <Picker.Item label="Category" value="" />
          <Picker.Item label="Main Dish" value="Main Dish" />
          <Picker.Item label="Salad" value="Salad" />
          <Picker.Item label="Soup/Stew" value="Soup/Stew" />
          <Picker.Item label="Cookies" value="Cookies" />
          <Picker.Item label="Cakes" value="Cakes" />
          <Picker.Item label="Juice" value="Juice" />
          <Picker.Item label="Other Desserts" value="Other Desserts" />
        </Picker>
        <View style={styles.inputPageButtons}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.inputPageButton,
              {marginRight: '4%', backgroundColor: '#f1f1f1'},
            ]}>
            <Text style={styles.inputPageButtonText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSteps(true)}
            style={[
              styles.inputPageButton,
              {marginLeft: '4%', backgroundColor: '#fe9635'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'white'}]}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
       </View> 
    </View>
  );
}
  // recipe steps
  else if(steps==true && ingredients==false){
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <View style={styles.inputPage}>
        <Text style={styles.inputPageTitle}>New recipe</Text>
        <Text style={styles.inputPageSubTitle}>Steps</Text> 
        <View style={styles.inputPageButtons}>
          <TouchableOpacity
            onPress={() => addStepInput(stepInput.length)}
            style={[
              styles.inputPageSign,
              {marginRight: '4%', backgroundColor: '#fe9635'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'white'}]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => removeStepInput()}
            style={[
              styles.inputPageSign,
              {marginLeft: '4%', backgroundColor: '#f1f1f1'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'black'}]}>-</Text>
          </TouchableOpacity>
        </View>      
        {stepInput.map((value) => {return value})}
        <View style={styles.inputPageButtons}>
          <TouchableOpacity
            onPress={() => setSteps(false)}
            style={[
              styles.inputPageButton,
              {marginRight: '4%', backgroundColor: '#f1f1f1'},
            ]}>
            <Text style={styles.inputPageButtonText}>BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIngredients(true)}
            style={[
              styles.inputPageButton,
              {marginLeft: '4%', backgroundColor: '#fe9635'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'white'}]}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
  )
  }
  // recipe ingredients/measures  
  else
  {
    return (
      <View style={{flex: 1}}>
        <Header navigation={navigation} />
        <View style={styles.inputPage}>
          <Text style={styles.inputPageTitle}>New recipe</Text>
          <Text style={styles.inputPageSubTitle}>Ingredients</Text>
          <View style={styles.inputPageButtons}>
          <TouchableOpacity
            onPress={() => addIngInput(ingInput.length)}
            style={[
              styles.inputPageSign,
              {marginRight: '4%', backgroundColor: '#fe9635'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'white'}]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => removeIngInput()}
            style={[
              styles.inputPageSign,
              {marginLeft: '4%', backgroundColor: '#f1f1f1'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'black'}]}>-</Text>
          </TouchableOpacity>
        </View>      
        {ingInput.map((value) => {return value})}
        <View style={styles.inputPageButtons}>
          <TouchableOpacity
            onPress={() => setIngredients(false)}
            style={[
              styles.inputPageButton,
              {marginRight: '4%', backgroundColor: '#f1f1f1'},
            ]}>
            <Text style={styles.inputPageButtonText}>BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => submit()}
            style={[
              styles.inputPageButton,
              {marginLeft: '4%', backgroundColor: '#fe9635'},
            ]}>
            <Text style={[styles.inputPageButtonText, {color: 'white'}]}>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  inputPage: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  inputPageTitle: {
    paddingVertical: 40,
    color: '#333',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  },
  inputPageSubTitle: {
    paddingVertical: 40,
    color: '#fe9635',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  inputLarge: {
    width: '80%',
    height: '10%',
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  inputRow: {
    width: '33%',
    height: 50,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginRight:10,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  picker: {
    width: '80%',
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  pickerRow: {
    width: '33%',
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  inputPageButtons: {
    width: '75%',
    flexDirection: 'row',
    borderRadius: 10,
    color: '#333',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inputPageButton: {
    height: 50,
    width: '46%',
    paddingHorizontal: 20,
    borderRadius: 10,
    color: '#333',
    elevation: 3,
    justifyContent: 'center',
  },
  inputPageSign: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 100,
    color: '#333',
    elevation: 3,
    justifyContent: 'center',
    marginBottom: 20
  },
  inputPageButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default AddRecipe;
