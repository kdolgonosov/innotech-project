import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBar, setSearchString } from 'features/catalog/SearchBar';
import { renderWithProviders } from './utils/utils';
import userEvent from '@testing-library/user-event';
import { resetPage } from 'entities/catalog/ProductList/model/slice';

describe('SearchBar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('case search on debounce', async () => {
    const { store } = renderWithProviders(<SearchBar />);
    const spy = jest.spyOn(store, 'dispatch');
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'test-debounce');
    await waitFor(() => {
      expect(spy.mock.calls.length).toBe(2);
    });
    expect(spy).toHaveBeenCalledWith(resetPage());
    expect(spy).toHaveBeenCalledWith(setSearchString('test-debounce'));
  });
  test('case search on enter', async () => {
    const { store } = renderWithProviders(<SearchBar />);
    const spy = jest.spyOn(store, 'dispatch');
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'test-enter');
    userEvent.keyboard('[Enter]');
    expect(spy.mock.calls.length).toBe(2);
    expect(spy).toHaveBeenCalledWith(resetPage());
    expect(spy).toHaveBeenCalledWith(setSearchString('test-enter'));
  });
  test('case search on button', async () => {
    const { store } = renderWithProviders(<SearchBar />);
    const spy = jest.spyOn(store, 'dispatch');
    const input = screen.getByRole('textbox');
    const btn = screen.getByRole('button');
    userEvent.type(input, 'test-button');
    fireEvent.click(btn);
    expect(spy.mock.calls.length).toBe(2);
    expect(spy).toHaveBeenCalledWith(resetPage());
    expect(spy).toHaveBeenCalledWith(setSearchString('test-button'));
  });
});
