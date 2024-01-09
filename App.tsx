import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import css from '@emotion/native';
import Button from './src/components/Button';
import AdaptiveDiv from './src/components/AdaptiveDiv';
import WhiteContainer from './src/components/WhiteContainer';
import InputAcount from './src/components/Input/InputAccount';
import Select from 'components/Input/Select';
import {theme} from './src/tools/theme';
import {DripsyProvider} from 'dripsy';

function App(): React.JSX.Element {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <WhiteContainer>
            <AdaptiveDiv type="center">
              <Button type="gray">Button</Button>
            </AdaptiveDiv>
          </WhiteContainer>
        </ScrollView>
      </SafeAreaView>
    </DripsyProvider>
  );
}
export default App;
