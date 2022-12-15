INSERT INTO tb_category (name, created_At) values ('Lazer', NOW());
INSERT INTO tb_category (name, created_At) values ('Alimentação', NOW());
INSERT INTO tb_category (name, created_At) values ('Supermercado', NOW());
INSERT INTO tb_category (name, created_At) values ('Farmácia', NOW());
INSERT INTO tb_category (name, created_At) values ('Outros', NOW());

INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('João Silva', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-121', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Marcia', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-121', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Julia', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-121', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Ana Clara', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-121', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Marcos Rocha', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-121', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Hulk', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-121', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Luiza', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-121', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Juliana', 'Rua Carlos ', '12', null, 'Brasil', '38.400-121', 'Rio de Janeiro', 'RJ', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Luciana', 'Rua Flores', '210', null, 'Brasil', '38.422-111', 'São Paulo', 'SP', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Junior', 'Rua Veneza', '321', null, 'Brasil', '38.400-121', 'Florianópolis', 'SC', true);

INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Salário mensal', '2017-06-10', null, 6500.00, 'Distribuição de lucros', 'RECEITA', 1, 1);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Bahamas', '2017-02-10', '2017-02-10', 100.32, null, 'DESPESA', 2, 2);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Top Club', '2018-06-10', null, 120, null, 'RECEITA', 3, 3);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('CEMIG', '2018-02-10', '2017-02-10', 110.44, 'Geração', 'RECEITA', 3, 4);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Extra', '2019-03-10', '2017-03-10', 1010.32, null, 'RECEITA', 4, 6);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Eletrônicos', '2019-04-10', '2017-04-10', 2100.32, null, 'DESPESA', 5, 4);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Instrumentos', '2020-06-10', null, 1040.32, null, 'DESPESA', 4, 3);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Café', '2020-06-10', null, 8.32, null, 'DESPESA', 1, 5);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Conta de luz', '2018-02-10', '2018-02-10', 110.44, null, 'DESPESA', 3, 4);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Conta de água', '2018-02-15', null, 200.30, null, 'DESPESA', 3, 5);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Restaurante', '2018-03-14', '2018-03-14', 1010.32, null, 'DESPESA', 4, 6);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Venda vídeo game', '2022-12-15', null, 500, null, 'RECEITA', 1, 7);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Clube', '2018-03-07', '2018-03-05', 400.32, null, 'DESPESA', 4, 8);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Impostos', '2018-04-10', null, 123.64, 'Multas', 'DESPESA', 3, 9);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Multa', '2018-04-10', null, 665.33, null, 'DESPESA', 5, 10);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Padaria', '2022-12-15', '2018-02-28', 8.32, null, 'DESPESA', 1, 5);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Papelaria', '2021-12-10', '2018-04-10', 2100.32, null, 'DESPESA', 5, 4);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Almoço', '2022-12-15', null, 1040.32, null, 'DESPESA', 4, 3);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Café', '2022-12-15', '2018-02-18', 4.32, null, 'DESPESA', 4, 2);
INSERT INTO tb_release (description, due_date, date_payment, value, observation, type, category_id, person_id) values ('Lanche', '2022-12-15', null, 10.20, null, 'DESPESA', 4, 1);


INSERT INTO tb_user (name, email, password) VALUES ('Axl', 'axl@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Rose', 'rose@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);