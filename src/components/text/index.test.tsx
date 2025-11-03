import { render } from '@testing-library/react-native';

import { Text } from './index';

describe('Text Component', () => {
  it('should render text content correctly', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('should apply font-regular class when no font class is provided', () => {
    const { getByText } = render(<Text className="text-blue-500">Hello</Text>);
    const textElement = getByText('Hello');
    expect(textElement.props.className).toContain('font-regular');
  });

  it('should not add font-regular when font class is already provided', () => {
    const { getByText } = render(
      <Text className="font-medium text-blue-500">Hello</Text>
    );
    const textElement = getByText('Hello');
    expect(textElement.props.className).toContain('font-medium');
  });
});
