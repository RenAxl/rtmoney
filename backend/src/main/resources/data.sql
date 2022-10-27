INSERT INTO tb_category (name, created_At) values ('Lazer', NOW());
INSERT INTO tb_category (name, created_At) values ('Alimentação', NOW());
INSERT INTO tb_category (name, created_At) values ('Supermercado', NOW());
INSERT INTO tb_category (name, created_At) values ('Farmácia', NOW());
INSERT INTO tb_category (name, created_At) values ('Outros', NOW());


INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('João Silva', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-12', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Marcia', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-12', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Julia', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-12', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Ana Clara', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-12', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Marcos Rocha', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-12', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Hulk', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-12', 'Uberlândia', 'MG', true);
INSERT INTO tb_person (name, public_place, number, complement, district, zip_code, city, state, active) values ('Luiza', 'Rua do Abacaxi', '10', null, 'Brasil', '38.400-12', 'Uberlândia', 'MG', true);

INSERT INTO tb_release (description, dua_date, date_payment, value, observation, type, category_id, person_id) values ('Salário mensal', '2017-06-10', null, 6500.00, 'Distribuição de lucros', 'RECEITA', 1, 1);
INSERT INTO tb_release (description, dua_date, date_payment, value, observation, type, category_id, person_id) values ('Bahamas', '2017-02-10', '2017-02-10', 100.32, null, 'DESPESA', 2, 2);
INSERT INTO tb_release (description, dua_date, date_payment, value, observation, type, category_id, person_id) values ('Top Club', '2017-06-10', null, 120, null, 'RECEITA', 3, 3);
INSERT INTO tb_release (description, dua_date, date_payment, value, observation, type, category_id, person_id) values ('CEMIG', '2017-02-10', '2017-02-10', 110.44, 'Geração', 'RECEITA', 3, 4);
INSERT INTO tb_release (description, dua_date, date_payment, value, observation, type, category_id, person_id) values ('Extra', '2017-03-10', '2017-03-10', 1010.32, null, 'RECEITA', 4, 6);
INSERT INTO tb_release (description, dua_date, date_payment, value, observation, type, category_id, person_id) values ('Eletrônicos', '2017-04-10', '2017-04-10', 2100.32, null, 'DESPESA', 5, 4);
INSERT INTO tb_release (description, dua_date, date_payment, value, observation, type, category_id, person_id) values ('Instrumentos', '2017-06-10', null, 1040.32, null, 'DESPESA', 4, 3);
INSERT INTO tb_release (description, dua_date, date_payment, value, observation, type, category_id, person_id) values ('Café', '2017-06-10', null, 8.32, null, 'DESPESA', 1, 5);

INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Alex', 'Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Maria', 'Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);